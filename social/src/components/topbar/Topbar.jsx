import './topbar.css'

const Topbar = () => {
    return ( 
        <div className='topbarContainer'>
        <div className='topbarLeft'>
            <span className='logo'><a href='/'><i class="fa-solid fa-ghost"></i>phatomCanChat</a></span>
        </div>
        <div className='topbarCenter'>
            <div className='searchbar'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input placeholder="Search for stories or friends" className='searchInput' />
            </div>
        </div>
        <div className='topbarRight'>
            <div className='topbarLinks'>
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className='topbarIcons'>
               <div className='topbarIconItem'>
                    <i class="fa-solid fa-user"></i>
                    <span className='topbarIconBadge'>1</span>
                </div> 
               <div className='topbarIconItem'>
                    <i class="fa-solid fa-comment-dots"></i>
                    <span className='topbarIconBadge'>14</span>
                </div> 
               <div className='topbarIconItem'>
                    <i class="fa-solid fa-bell"></i>
                    <span className='topbarIconBadge'>2</span>
                </div> 
            </div>
            <img src='assets/person/1.jpg' alt='Profile' className='topbarImg'/>
        </div>
        </div>
     );
}
 
export default Topbar;