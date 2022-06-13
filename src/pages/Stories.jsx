import { useState, useEffect } from "react"
import Loader from "../components/Loader"
import { getStories } from "../utils/api"
import { fromUnixTime, format } from 'date-fns'

export default function Stories({ type }) {

    const [story, setStory] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async function () {
            setLoading(true)
            await getStories(type, 20).then(data => data && setStory(data))
            setLoading(false)
        })()
    }, [type])

    return (
        <>
            {
                loading ?
                <Loader loading={loading} />
                :
                <div>
                    <h2 className="fw-bold mt-5 mb-3">
                        <span className="text-capitalize">{type}</span> Stories
                    </h2>
                    <hr />
                    {story.map(item => (
                        <div key={item.id}>
                            <div className="ps-5 mb-3">
                                <h3 className="box__title h5 fw-normal m-0">{item.title}<span className="text-black-50 fs-6">(<a href={item.url} className="link-primary text-black-50" target="_blank" rel="noopener noreferrer">{item.url ? `${item.url.slice(0, 30)}...` : 'No link'}</a>)</span></h3>
                                <p className="box__text text-black-50 m-0">
                                    <span className="fw-semibold">By: </span>{item.by} | <span className="fw-semibold">Posted: {format(fromUnixTime(item.time), "MMM dd, yyyy")}</span>
                                </p>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            }
        </>
    )
} 
