export default function WelcomeComponent(prop){
    return(
        <div className="demo-area">
            <div className="card-title">
                Good Morning, {prop.name}
            </div>
          </div>
    )
}