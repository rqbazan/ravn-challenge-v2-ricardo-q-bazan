import { DataCell, LoadingCell, PersonCell, SectionHeader } from '~/ui/components'

export function HomeView() {
  return (
    <div className="flex h-full">
      <div className="flex flex-col w-full md:w-[350px] border-r border-border overflow-y-auto">
        <PersonCell name="Luke Skywalker" speciesName="Human" homeworldName="Tatooine" />
        <PersonCell name="Luke Skywalker" speciesName="Human" homeworldName="Tatooine" />
        <PersonCell name="Luke Skywalker" speciesName="Human" homeworldName="Tatooine" />
        <PersonCell name="Luke Skywalker" speciesName="Human" homeworldName="Tatooine" />
        <PersonCell name="Luke Skywalker" speciesName="Human" homeworldName="Tatooine" />
        <PersonCell name="Luke Skywalker" speciesName="Human" homeworldName="Tatooine" />
        <PersonCell name="Luke Skywalker" speciesName="Human" homeworldName="Tatooine" />
        <PersonCell name="Luke Skywalker" speciesName="Human" homeworldName="Tatooine" />
        <PersonCell name="Luke Skywalker" speciesName="Human" homeworldName="Tatooine" />
        <PersonCell name="Luke Skywalker" speciesName="Human" homeworldName="Tatooine" />
        <PersonCell name="Luke Skywalker" speciesName="Human" homeworldName="Tatooine" />
        <PersonCell name="Luke Skywalker" speciesName="Human" homeworldName="Tatooine" />
        <PersonCell name="Luke Skywalker" speciesName="Human" homeworldName="Tatooine" />
        <LoadingCell />
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
