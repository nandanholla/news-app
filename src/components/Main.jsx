import { useState, useEffect } from 'react'
import { fromUnixTime, format } from 'date-fns'
import { img1, img3, img4, img5 } from '../assets/index'
import { getStories } from '../utils/api'
import Loader from './Loader';

export default function Main() {

    const [topStories, setTopStories] = useState(() => [])
    const [newStories, setNewStories] = useState(() => [])
    const [bestStories, setBestStories] = useState(() => [])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function () {
            await getStories('new', 5).then(data => data && setNewStories(data))
            await getStories('top', 5).then(data => data && setTopStories(data))
            await getStories('best', 5).then(data => data && setBestStories(data))
            setLoading(false)
        })()
    }, [])


    return (
        <>
            {
                loading ?
                <Loader loading={loading} />
                :
                <div className='pb-5'>
                    <div className="row main">
                        <div className="col-12 col-lg-7 align-items-center main__left">
                            {newStories.slice(0, 1).map((item) => (
                                <div className="main__left-image mb-3 mb-lg-0" key={item.id}>
                                    <img src={img5} alt={item.title} loading='lazy' />
                                    <div className="main__left-image-description d-flex flex-column align-items-center pt-3">
                                        <a href={item.url ? item.url : '#'} target="_blank" rel="noopener noreferrer" className='link-light'>
                                            <h2 className="h4 fw-bold title text-center px-2">
                                                {item.title}
                                            </h2>
                                        </a>
                                        <p className="by">
                                            {item.by}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="col-12 col-lg-5">
                            {newStories.slice(1, 5).map((item) => (
                                <>
                                    <div className="col-12 mb-3" key={item.id}>
                                        <div className="main__right d-flex">
                                            <img src={img1} alt={item.title} className='me-3' />
                                            <div className="right w-100">
                                                <div className="top d-flex justify-content-between text-black-50">
                                                    <p>{format(fromUnixTime(item.time), "MMM dd, yyyy")}</p>
                                                    <p>{item.by}</p>
                                                </div>
                                                <a href={item.url ? item.url : '#'} target="_blank" rel="noopener noreferrer" className='link-dark'>
                                                    <p className="news fs-6 fw-semibold">
                                                        {item.title}
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </>

                            ))}

                        </div>
                    </div>

                    {/* Top Stories */}

                    <div className="col">
                        <h2 className="fw-bold mt-5 mb-3">
                            Top Stories
                        </h2>

                        <div className="row">

                            {topStories.map(item => (
                                <div className="col top-stories px-2 mb-3 text-center" key={item.id}>
                                    <img loading='lazy' className='top-stories-image' src={img3} alt={item.title} />

                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className='link-dark mt-3'>
                                        <h3 className="h6 text-start m-0 text-center text-md-start">
                                            {item.title.length < 50 ? item.title : `${item.title.slice(0, 50).split(' ').slice(0, -1).join(' ')}...`}
                                        </h3>
                                    </a>

                                    <div className='top-stories-details d-flex justify-content-md-between justify-content-center m-0 top-stories-by'>
                                        <p className='text-black-50 text-start me-2 me-md-0'>{item.by}</p>
                                        <p className='text-black-50'>{format(fromUnixTime(item.time), 'MMM dd, yyyy')}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr />
                    </div>

                    {/* Best Stories */}

                    <div className="best-stories">

                        <h2 className="fw-bold mt-5 mb-3">
                            Best Stories
                        </h2>

                        <div className="row d-flex flex-column gap-4">
                            {bestStories.map((item) => (
                                <div>
                                    <div className="col d-flex" key={item.id}>
                                        <img loading='lazy' src={img4 || img5} alt={item.title} className='me-3' />
                                        <div className="best-stories-right w-100">
                                            <div className="d-flex justify-content-between">
                                                <p className="text-black-50">{format(fromUnixTime(item.time), 'MMM dd, yyyy')}</p>
                                                <p className="text-black-50">{item.by}</p>
                                            </div>
                                            <a href={item.url} target="_blank" rel="noopener noreferrer" className='link-dark'>
                                                <h2 className='h5'>
                                                    {item.title}
                                                </h2>
                                            </a>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
