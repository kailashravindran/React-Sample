import React from 'react'

function Form() {
    const data=[
        {
            name:"Free",
            price:0,
            user:"single"
        },
        {
            name:"Plus",
            price:9,
            user: 5
        },
        {
            name:"Pro",
            price:49,
            user:"unlimited"
        },
    ]
  return (
    <section class="pricing py-5">
    <div class="container">
      <div class="row">
      {
        data.map((content)=>{
            return   <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">{content.name}</h5>
                <h6 class="card-price text-center">${content.price}<span class="period">/month</span></h6>
                <hr/>
                <ul class="fa-ul">
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>{content.name==="Free"?content.user:<b>{content.user}</b>}</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>5GB Storage</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Unlimited Public Projects</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Community Access</li>
                  <li class={content.name==="Free"?"text-muted":""}><span class="fa-li"><i class="fa fa-times"></i></span>Unlimited
                    Private Projects</li>
                  <li class="text-muted"><span class="fa-li"><i class={content.name==="Free"?"fa fa-times":"fa fa-check"}></i></span>Dedicated
                    Phone Support</li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Free Subdomain
                  </li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Monthly Status
                    Reports</li>
                </ul>
                <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
        })
      }
        

      </div>
    </div>
  </section>
  )
}

export default Form