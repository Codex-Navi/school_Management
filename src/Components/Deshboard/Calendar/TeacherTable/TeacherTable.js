import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';



function getRandomClasses() {
    const classes = ["I A", "I B", "II A", "II B", "III A", "III B", "IV A", "IV B", "V A", "V B", 
                     "VI A", "VI B", "VII A", "VII B", "VIII A", "VIII B", "IX A", "IX B", "X A", "X B", 
                     "XI A", "XI B", "XII A", "XII B"];
    classes.sort(() => Math.random() - 0.5); // Shuffle the array
    return classes.slice(0, Math.floor(Math.random() * 2) + 4).join(", "); // Pick 4-5 and return as a string


    
}







const teachers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      subject: "Mathematics",
      experience: "12 years",
      qualification: "Ph.D. in Mathematics",
      contact: "sarah.j@school.edu",
      salary: "$85,432",
      assignedClasses: getRandomClasses()
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      subject: "Physics",
      experience: "8 years",
      qualification: "M.Sc. in Physics",
      contact: "michael.c@school.edu",
      salary: "$72,891",
      assignedClasses: getRandomClasses()
    },
    {
      id: 3,
      name: "Mrs. Emily Rodriguez",
      subject: "English Literature",
      experience: "15 years",
      qualification: "M.A. in English",
      contact: "emily.r@school.edu",
      salary: "$90,245",
      assignedClasses: getRandomClasses()
    },
    {
      id: 4,
      name: "Mr. David Wilson",
      subject: "History",
      experience: "10 years",
      qualification: "M.A. in History",
      contact: "david.w@school.edu",
      salary: "$78,567",
      assignedClasses: getRandomClasses()
    },
    {
      id: 5,
      name: "Dr. Priya Sharma",
      subject: "Biology",
      experience: "9 years",
      qualification: "Ph.D. in Molecular Biology",
      contact: "priya.s@school.edu",
      salary: "$88,123",
      assignedClasses: getRandomClasses()
    },
];
  






export default function TeacherTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

 




    return (
        <div style={{display:'flex',flexDirection:'column'
        }}>
        <h1 style={{color: '#6b46c1',fontSize:'18px',fontWeight:'bold',marginBottom:'10px'}}>Teacher Deatails</h1>
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>

                <TableContainer>
                    <Table>

                        <TableHead>
                            <TableRow>
                                <TableCell>SL No.</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Subject</TableCell>
                                <TableCell>Qulification</TableCell>
                                <TableCell>Assign Classes</TableCell>
                                <TableCell>Salary</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {teachers.map((row, index) => {
                              

                                return (
                                    <TableRow key={index}>
                                      <TableCell>{row.id}</TableCell>
                                      <TableCell>{row.name}</TableCell>
                                      <TableCell>{row.subject}</TableCell>
                                      <TableCell>{row.qualification}</TableCell>
                                      <TableCell>{row.assignedClasses}</TableCell>
                                      <TableCell>{row.salary}</TableCell>
                                        
                                    </TableRow>
                                );
                            })}
                            
                        </TableBody>
                    </Table>
                </TableContainer>
               
            </Paper>
          
        </Box>
        </div>
    );
}