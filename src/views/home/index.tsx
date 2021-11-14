import * as React from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'

import { Person, useAllPeopleQuery } from '~/gql'
import { DataCell, LoadingCell, NoticeCell, PersonCell, SectionHeader } from '~/ui/components'

interface AllPeopleListWidgetProps {
  chunkSize?: number
}

interface AllPeopleListProps {
  data: Person[]
  hasNextPage: boolean
  onLoadMore(): void
}

function AllPeopleList({ data, hasNextPage, onLoadMore }: AllPeopleListProps) {
  const [infiniteTriggerRef] = useInfiniteScroll({
    onLoadMore,
    hasNextPage,
    loading: false,
    delayInMs: 1000,
  })

  return (
    <React.Fragment>
      {data.map(item => {
        return (
          <a key={item.id} href="#">
            <PersonCell
              name={item.name!}
              speciesName={item.species?.name!}
              homeworldName={item.homeworld?.name!}
            />
          </a>
        )
      })}
      {hasNextPage && (
        <div ref={infiniteTriggerRef}>
          <LoadingCell />
        </div>
      )}
    </React.Fragment>
  )
}

function AllPeopleListWidget({ chunkSize = 5 }: AllPeopleListWidgetProps) {
  const { data, loading, error, fetchMore } = useAllPeopleQuery({
    variables: {
      first: chunkSize,
    },
  })

  if (error) {
    return <NoticeCell message="Failed to Load Data" />
  }

  if (loading) {
    return <LoadingCell />
  }

  return (
    <AllPeopleList
      data={data!.allPeople!.edges!.map(edge => edge!.node!)}
      hasNextPage={data!.allPeople!.pageInfo.hasNextPage}
      onLoadMore={() => {
        fetchMore({
          variables: {
            first: chunkSize,
            after: data!.allPeople!.pageInfo.endCursor,
          },
        })
      }}
    />
  )
}

export function HomeView() {
  return (
    <div className="flex h-full">
      <div className="flex flex-col w-full md:w-[350px] border-r border-border overflow-y-auto">
        <AllPeopleListWidget />
      </div>
      <div className="flex-1 hidden md:block">
        <div className="mx-auto max-w-3xl">
          <section>
            <SectionHeader title="General Information" />
            <DataCell label="Eye Color" value="Blue" />
            <DataCell label="Eye Color" value="Blue" />
            <DataCell label="Eye Color" value="Blue" />
            <DataCell label="Eye Color" value="Blue" />
          </section>
          <section>
            <SectionHeader title="Vehicles" />
            <DataCell label="Snowspeeder" />
            <DataCell label="Imperial Speeder Bike" />
          </section>
        </div>
      </div>
    </div>
  )
}
