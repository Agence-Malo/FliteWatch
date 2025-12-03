import { Jet } from '@/payload-types'
import { Divider } from '@heroui/react'

const Information = ({ information }: { information: Jet['information'] }) => {
  const table = [
    [
      {
        label: 'Cabin size',
        value: `L ${new Intl.NumberFormat('en-US').format(information.cabin.length)} m, W ${new Intl.NumberFormat('en-US').format(information.cabin.width)} m, H ${new Intl.NumberFormat('en-US').format(information.cabin.height)} m`,
      },
      {
        label: 'Maximum speed',
        value: `${new Intl.NumberFormat('en-US').format(information.speed)} km | ${new Intl.NumberFormat('en-US').format(parseFloat((information.speed * 0.539957).toFixed(2)))} nmi`,
      },
      {
        label: 'Flights Hours',
        value: `${Math.floor(information.hours)} h${Math.round((information.hours - Math.floor(information.hours)) * 60) > 0 ? ` ${Math.round((information.hours - Math.floor(information.hours)) * 60)} min` : ''}`,
      },
    ],
    [
      {
        label: 'Crew',
        value: `${information.crew.pilots > 0 && `${information.crew.pilots}`} pilot${information.crew.pilots > 1 ? 's' : ''}${information.crew.attendants > 0 && `, ${information.crew.attendants} Flight attendant${information.crew.attendants > 1 ? 's' : ''}`}`,
      },
      {
        label: 'Maximum range',
        value: `${new Intl.NumberFormat('en-US').format(information.range)} nm`,
      },
      {
        label: 'Baggage',
        value: `${new Intl.NumberFormat('en-US').format(information.baggage)} m³`,
      },
    ],
  ]

  return (
    <section
      className={
        'w-[92vw] md:w-4/5 lg:w-4/6 px-[6vw] py-[4vh] md:py-[6vh] my-[4vh] grid grid-cols-1 md:grid-cols-2 md:gap-[2vw] bg-grey-50 rounded-lg drop-shadow-xl'
      }
    >
      {table.map((col, i) => (
        <>
          <div key={i} className={'w-full flex flex-col justify-center items-center'}>
            {col.map((row, j) => (
              <>
                <div key={j} className={'w-full flex justify-between items-baseline'}>
                  <p className={'w-1/2'}>{row.label}</p>
                  <p className={'font-bold w-1/2'}>{row.value}</p>
                </div>
                {j < col.length - 1 && <Divider className={'my-[1vh]'} />}
              </>
            ))}
          </div>
          {i < table.length - 1 && <Divider className={'md:hidden my-[1vh]'} />}
        </>
      ))}
    </section>
  )
}

export default Information
