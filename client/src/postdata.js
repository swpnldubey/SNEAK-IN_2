import React from 'react'
// import sathaye from '../icons/sathaye.jpg'
import pic1 from './icons/pic1.png'
import pic2 from './icons/pic2.png'
import pic3 from './icons/pic3.png'
import history from './icons/history.jpg'
import english from './icons/english_cafe.jpg'
import { HashRouter } from 'react-router-dom'


const PostData = [
    {
        username: 'sathaye',
        image: history,
        desc: "Department of History",
        liked: false
    },
    {
        username: 'sathaye',
        image: english,
        desc: "Department of English",
        liked: false
    },
    {
        username: 'sathaye',
        image: pic1,
        desc: "Department of Economics",
        liked: true
    },
    {
        username: 'sathaye',
        image: pic2,
        desc: "Depatment of Science",
        liked: false
    },
    {
        username: 'sathaye',
        image: pic3,
        desc: "Departmetn of Physics",
        liked: true
    }
]

export default PostData;