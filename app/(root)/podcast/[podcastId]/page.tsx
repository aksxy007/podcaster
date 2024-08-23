import React from 'react'

const PodcastDeatails = ({params}:{params:{podcastId:string}}) => {
  
  return (
    <div className='text-white-1'>PodcastDeatails for {params.podcastId}</div>
  )
}

export default PodcastDeatails