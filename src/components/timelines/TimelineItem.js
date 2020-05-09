import React from 'react'
import PropTypes from 'prop-types';
import Timelines from './Timelines';

export const TimelineItem = (timeline) => {
    console.log("test", timeline)
    return (
        <div className="card">
        <span>

        <p> <a className="link" href={timeline.timeline.actor.url}>{timeline.timeline.actor.login}</a>&nbsp;&nbsp; {timeline.timeline.payload.action}   
        &nbsp;&nbsp;<a className="link" href={timeline.timeline.repo.name}>{timeline.timeline.repo.name}</a>
                       </p> </span>

                       <span className="align-middle time"></span>     
    </div>
    )
}


TimelineItem.propTypes = {
    timeline: PropTypes.object.isRequired
}

export default TimelineItem;