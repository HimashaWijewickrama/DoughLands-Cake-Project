import data1 from '../assets/data1.jpg';
import reportInv from '../assets/report.jpg';

import cake2 from '../assets/cake2.jpg';
import upinv from '../assets/upinv.jpg';
const data={
    ItemData:[
        {
            id:1,
            img:upinv,
            title:'Add Inventory',
            desc:'You can add new inventory item to the database by using "Add Inventory" button',
            more:'',
           
        },
        {
            id:2,
            img:data1,
            title:'Delete Inventory',
            desc:'You can delete any inventory by clicking "Delete" button on the table',
            more:'',
         
        },
        {
            id:3,
            img:cake2,
            title:'Update Inventory',
            desc:'You can update any inventory by clicking "Update" button on the table',
            more:'',
          
        },
        {
            id:4,
            img:reportInv,
            title:'Generate Stock Availability Report',
            desc:'You can create a new report for each inventory item to check their availability. Also can download it as a PDF document',
            more:'',
          
        },
    ],
};
export default data;