import React from 'react'
import './Statistics.css'
import profile1 from '../../assets/img/profile1.png'

const Statistics = () => {
    const styles = {
        Icon: {
          color: '#ffffff',
          fill: '#ffffff',
          fontSize: '24px',
         
          width: '24px',
          height: '24px',
        },

        Iconin: {
            color: '#ffffff',
            fill: '#ffffff',
            fontSize: '20px',
           marginRight: '10px',
            width: '15px',
          
          },
          Iconp: {
            color: '#ffffff',
            fill: '#ffffff',
            fontSize: '32px',
            width: '32px',
            height: '32px',
            marginTop: '10px',
          },
      };

  return (
  <>
          <aside id="sidebar" class="sidebar">

<ul class="sidebar-nav" id="sidebar-nav">

  <li class="nav-item">
    <a class="nav-link " href="index.html">
    <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z">
    </path>
  </svg>
    </a>
  </li>

  <hr/>
  <li class="nav-item">
    <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
    <svg style={styles.Icon}  viewBox="0 0 640 512">
    <path d="M416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 39.57 15.62 75.96 41.67 105.4c-16.39 32.76-39.23 57.32-39.59 57.68c-2.1 2.205-2.67 5.475-1.441 8.354C1.9 350.3 4.602 352 7.66 352c38.35 0 70.76-11.12 95.74-24.04C134.2 343.1 169.8 352 208 352C322.9 352 416 273.2 416 176zM599.6 443.7C624.8 413.9 640 376.6 640 336C640 238.8 554 160 448 160c-.3145 0-.6191 .041-.9336 .043C447.5 165.3 448 170.6 448 176c0 98.62-79.68 181.2-186.1 202.5C282.7 455.1 357.1 512 448 512c33.69 0 65.32-8.008 92.85-21.98C565.2 502 596.1 512 632.3 512c3.059 0 5.76-1.725 7.02-4.605c1.229-2.879 .6582-6.148-1.441-8.354C637.6 498.7 615.9 475.3 599.6 443.7z">
    </path>
  </svg>
    </a>
   
  </li>

  <li class="nav-item">
    <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
    <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z">
    </path>
  </svg>
    </a>
    
  </li>

  <li class="nav-item">
    <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
    <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z">
    </path>
  </svg>
    </a>
    
  </li>

  <li class="nav-item">
    <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
    <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z">
    </path>
    <path d="M7 4h10v15H7zM3 6h2v11H3zm16 0h2v11h-2z">
    </path>
  </svg>
    </a>
    
  </li>

  <li class="nav-item">
    <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
    <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z">
    </path>
  </svg>
    </a>
    
  </li>

  <li class="nav-item">
    <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
    <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z">
    </path>
  </svg>
    </a>
    
  </li>

  <li class="nav-item">
    <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
    <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z">
    </path>
    <path d="M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28a1.98 1.98 0 0 0 3.44 0H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46A6.956 6.956 0 0 0 19 10c0-3.87-3.13-7-7-7zm2 16h-4v-1h4v1zm0-2h-4v-1h4v1zm-1.5-5.59V14h-1v-2.59L9.67 9.59l.71-.71L12 10.5l1.62-1.62.71.71-1.83 1.82z">
    </path>
  </svg>
    </a>
  
  </li>

<hr className='activityhr'/> 


 

  </ul>
</aside>
    
<main id="dashboard" className="dashboard">
<div class="row">


<div class="col-lg-8">
  <div class="row">


    <div class="col-xxl-4 col-md-12">
      <h2 className='title'>Tweet Statistics</h2>
    <div className="analyzed mt-4">
            <div className='tweets'>
            <h4>Tweets analyzed</h4>
            <h3>31.8 hours</h3>
            </div>
           
            <div class="bar-container">
<div class="mon"></div>
<span>Mon</span>
</div>


<div class="bar-container">
<div class="tue"></div>
<span>Tue</span>
</div>

<div class="bar-container">
<div class=" wed"></div>
<span>Wed</span>
</div>

<div class="bar-container">
<div class="thu"></div>
<span>Thu</span>
</div>
<div class="bar-container">
<div class="fri"></div>
<span>Fri</span>
</div>
<div class="bar-container">
<div class="sat"></div>
<span>Sat</span>
</div>

<div class="bar-container">
<div class="sun"></div>
<span>Sun</span>
</div>

        </div>
    </div>

    
   
    <div class="col-xxl-4 col-xl-12">

    <div className="contain mt-4">
<div className="goal">
        <svg style={styles.Iconin}  viewBox="0 0 512 512">
<path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM112 256C112 176.5 176.5 112 256 112C335.5 112 400 176.5 400 256C400 335.5 335.5 400 256 400C176.5 400 112 335.5 112 256zM256 336C300.2 336 336 300.2 336 256C336 211.8 300.2 176 256 176C211.8 176 176 211.8 176 256C176 300.2 211.8 336 256 336zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64z">
</path>
</svg>

            <span>Goal</span>

            <div className="days">
                <p>2/3 days</p>
            </div>
        </div>

        <div className="goal">
        <svg style={styles.Iconin}  viewBox="0 0 576 512">
<path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z">
</path>
</svg>
            <span>Streak</span>

            <div className="days">
                <p>103 days</p>
            </div>
        </div>
</div>

    </div>
   

  
  

   
    <div class="col-12">
     
<div className="perform mt-4">
<div className='per'>
<h3 className="title">Performance</h3>
</div>

<div className="content">
<div className="tweetsbookmark">
<div className="svg">
<svg style={styles.Iconp}  viewBox="0 0 24 24">
<path d="M0 0h24v24H0V0z" fill="none">
</path>
<path d="m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z">
</path>
</svg>
</div>
<h4>Tweets</h4>
<h3>31.8 hours</h3>

</div>

<div className="tweetsbookmark">
<div className="svg">
<svg style={styles.Iconp}  viewBox="0 0 24 24">
<path fill="none" d="M0 0h24v24H0z">
</path>
<path d="m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4-4-4z">
</path>
</svg>
</div>
<h4>Average per tweet</h4>
<h3>4.6 hours</h3>

</div>

<div className="tweetsbookmark">
<div className="svg diff">
<svg style={styles.Iconp}  viewBox="0 0 448 512">
<path d="M182.6 246.6C170.1 259.1 149.9 259.1 137.4 246.6L57.37 166.6C44.88 154.1 44.88 133.9 57.37 121.4C69.87 108.9 90.13 108.9 102.6 121.4L159.1 178.7L297.4 41.37C309.9 28.88 330.1 28.88 342.6 41.37C355.1 53.87 355.1 74.13 342.6 86.63L182.6 246.6zM182.6 470.6C170.1 483.1 149.9 483.1 137.4 470.6L9.372 342.6C-3.124 330.1-3.124 309.9 9.372 297.4C21.87 284.9 42.13 284.9 54.63 297.4L159.1 402.7L393.4 169.4C405.9 156.9 426.1 156.9 438.6 169.4C451.1 181.9 451.1 202.1 438.6 214.6L182.6 470.6z">
</path>
</svg>
</div>
<h4>Successful</h4>
<h3>12 courses</h3>

</div>
</div>



</div>

    </div>

  </div>
</div>




<div class="col-lg-4">

  
    

  <div className="activity">
    <h3 className='subtitle'>My Actvity</h3>
<div className="board">
<h6>Monday</h6>

<div className="profile">
<img src={profile1} alt="" />
<div className="text">
    <h3>Hate speech classification results</h3>
    <span>Sample tweets</span>
  </div>
</div>

<div className="profile">
<img src={profile1} alt="" />
<div className="text">
    <h3>Evaluation on accuracy</h3>
    <span>Performance</span>
  </div>
</div>

<hr className='activityhr'/>

<h6>10 days ago</h6>
<div className="profile">
<img src={profile1} alt="" />
<div className="text">
    <h3>HateSpeechClassifier overview</h3>
    <span>Classification results</span>
  </div>
</div>

<hr className='activityhr'/>

<div className="view">
<p>View all tweets</p>
</div>
</div>
</div>

  </div>
</div>


</main>

   

    </>
  )
}

export default Statistics