import Card from './Card';
const MainContainer = () => {
    return (
        <div className="main-container">
            <h1 className='text-red-500'>Welcome to My YouTube</h1>
            <div className="card-container flex justify-evenly">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default MainContainer;