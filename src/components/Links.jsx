import React from 'react'

function Links(props) {
    const slackname = "Lf_tobs_slack"
  return (
    <main>
        <a href="https://twitter.com/Lf_tobs?t=8l5UoCTItFMBcuN8QLoMfw&s=09" id={props.id[0]}><button>Twitter Link</button></a>
        
        <a href="https://training.zuri.team/" id={props.id[1]}><button>Zuri Team</button></a>
        
        <a href="http://books.zuri.team" id={props.id[2]}><button>Zuri Books</button></a>
        
        <a href="https://books.zuri.team/python-for beginners?ref_id={slackname}" id={props.id[3]}><button>Python Books</button></a>
        
        <a href="https://background.zuri.team" id={props.id[4]}><button>Background Check For Coders</button></a>
        
        <a href="https://books.zuri.team/design-rules" id={props.id[5]}><button>Design Books</button></a>
        
        
        <div class="socials">
            <img src="/img/slack.svg" alt="slack" />
            <img src="/img/Icon(git).svg" alt="github" />
        </div>
      
    </main>
  )
}

export default Links