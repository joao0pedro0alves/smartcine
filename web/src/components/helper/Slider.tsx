import {useKeenSlider} from 'keen-slider/react'

interface SliderProps<ItemT> {
    data: ItemT[]
    renderItem: (args: {item: ItemT}) => JSX.Element
    keyExtractor: (item: ItemT, index: number) => string

    itemsPerView?: number
    itemsSpacing?: number
}

export function Slider<ItemT = any>({
    data = [],
    keyExtractor,
    renderItem,
    itemsPerView = 8,
    itemsSpacing = 6,
}: SliderProps<ItemT>) {

    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: 'free-snap',
        slides: {
            perView: itemsPerView,
            spacing: itemsSpacing,
        },
    })

    return (
        <div ref={ref} className="keen-slider">
            {data.map((item, index) => (
                <div
                    key={keyExtractor(item, index)}
                    className="keen-slider__slide"
                >
                    {renderItem({item})}
                </div>
            ))}
        </div>
    )
}
