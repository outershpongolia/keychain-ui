import { IIconProps } from "src/interfaces"

export const HomeIcon = ({ className }: IIconProps) => {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
        >
            <path 
                d="M12,3L20,9V21H15V14H9V21H4V9L12,3Z" 
            />
        </svg>
    )
}