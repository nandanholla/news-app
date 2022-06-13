import ClipLoader from "react-spinners/ClipLoader";

export default function Loader({loading}) {
    return (
        <div className="loading d-flex justify-content-center d-flex justify-content-center align-items-center">
            <ClipLoader
                size={40}
                color={'#000'}
                loading={loading}
            />
        </div>
    )
}
