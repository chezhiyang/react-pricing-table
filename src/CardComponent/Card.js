import React from "react";
import Reports from "./Cards.json";

export default function Card(){
    return(
        <section className="pricing py-5">
            <div className="container">
                    <div className="row">
                        <CardPlans/>
                </div>
            </div>
        </section>
    )
}

function CardPlans(){
    let url="#";
    
    return(
       Reports.map(record => {
         return (
            <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{ record.plan }</h5>
                <h6 className="card-price text-center">{ record.price }<span className="period">/{ record.period }</span></h6>
                <hr/>
                <ul className="fa-ul">
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        { (record.plan === "PRO" || record.plan === "PLUS") ? <strong> { record.userLimit }</strong> : record.userLimit }
                    </li>
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        { record.storage }
                    </li>
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        { record.projectType }
                    </li>
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        { record.commAccess }
                    </li>
                    <li className={ record.plan === "FREE" ? "text-muted": ""}>
                        <span className="fa-li"><i className={ record.plan === "FREE" ? "fas fa-times": "fas fa-check"}></i></span>
                        { record.privateProjects }
                    </li>
                    <li className={ record.plan === "FREE" ? "text-muted": ""}>
                        <span className="fa-li"><i className={ record.plan === "FREE" ? "fas fa-times": "fas fa-check"}></i></span>
                        { record.support }
                    </li>
                    <li className={ record.plan === "FREE" ? "text-muted": ""}>
                        <span className="fa-li"><i className={ record.plan === "FREE" ? "fas fa-times": "fas fa-check"}></i></span>
                        { record.subdomain }
                    </li>
                    <li className={ record.plan === "PRO" ? "": "text-muted"}>
                        <span className="fa-li"><i className={ record.plan === "PRO" ? "fas fa-check": "fas fa-times"}></i></span>
                        { record.statusReport }
                    </li>
                </ul>
                <div className="d-grid">
                    <a href={ url } className="btn btn-primary text-uppercase">Button</a>
                </div>
                </div>
            </div>
            </div>     
         )
       })
    )
}
