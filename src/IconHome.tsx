interface IconProps {
    width?:number;
    height?: number;
    fill?: string;
}

const IconHome: React.FC<IconProps> = ({
    width = 32, height= 32, fill = 'currentColor'
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 32 32"
            fill='none'
            xmlns="http://www.w3.org/2000/svg"
        >
            <path></path>
        </svg>
    )
}