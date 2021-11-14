import * as React from 'react'
import { useRouter } from 'next/router'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import useMedia from 'use-media'

import { Person, useAllPeopleQuery } from '~/gql'
import { LoadingCell, NoticeCell, PersonCell } from '~/ui/components'
import theme from '~/ui/theme'
import { PersonView } from '~/views/person'

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

  const router = useRouter()

  const isBreakpointMD = useMedia(theme.breakpoints.md)

  return (
    <React.Fragment>
      {data.map(item => {
        const href = `/people/${item.id}`

        return (
          <a
            key={item.id}
            className="hover:bg-blue-50 focus:bg-blue-100"
            href={href}
            onClick={e => {
              e.preventDefault()

              if (!isBreakpointMD) {
                router.push(href)
              } else {
                router.push(`/?personId=${item.id}`, href, { shallow: true })
              }
            }}
          >
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

export function ExplorerView() {
  const { query } = useRouter()

  return (
    <div className="flex h-full">
      <div className="flex flex-col w-full md:w-[350px] border-r border-border md:overflow-y-auto">
        <AllPeopleListWidget />
      </div>
      <div className="flex-1 hidden md:block">
        <div className="mx-auto max-w-3xl">
          {query.personId && <PersonView personId={query.personId as string} />}
        </div>
      </div>
    </div>
  )
}
