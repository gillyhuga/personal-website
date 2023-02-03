
import { ThreeDots } from 'react-loader-spinner'

interface LoaderProps {
    visible: boolean;
}

const Loader = ({ visible }: LoaderProps) => {
    return (
        <div className="grid grid-cols-1 gap-4 place-items-center w-full">
            <div>
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#6B7280"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    visible={visible}
                />
            </div>
        </div>

    );
};

export default Loader;