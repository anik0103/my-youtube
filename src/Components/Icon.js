import UserIcon from '../assets/Sample_User_Icon.png'

const Icon = () => {
    return (
        <div>
            <img src={UserIcon} alt="" width={25}/>
        </div>
    );
}

/**
 * The default export of the Icon component.
 * This component is used to render an icon in the application.
 *
 * @component
 * @example
 * // Example usage:
 * <Icon name="home" size="24" color="blue" />
 */
export default Icon;