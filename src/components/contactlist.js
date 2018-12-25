import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ContactItem from './contactItem'
import axios from 'axios'

class ContactList extends Component {

componentDidMount=()=>{
    axios.get('/contact-get').then((res)=>this.props.refreshContactReducer(res.data))
}
    render() { 
        const {contacts}= this.props
        // console.log(this.props.contacts)
        return ( 
            <section>
            <div className='contact-list-container'>
            
           {
               contacts.map((el,index)=>
            <ContactItem key={index} item={el}/>
        )
           }
            </div>
            <Link to='/'>
            <button>Home</button>
            </Link>
            </section>
         );
    }
}
const mapStateToProps=(state)=>
{
    return {
        contacts:state.contactReducer
    }
}
 
const mapDispatchToProps=(dispatch)=>
{
    return {
        refreshContactReducer:contacts=>
        {
            dispatch({
                type:'REFRESH_CONTACT',
                contacts
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(ContactList);