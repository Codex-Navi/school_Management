"use client"



import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Box,
  Typography,
  IconButton,
  Pagination,
  styled,
} from "@mui/material"
import { Print as PrintIcon, MoreHoriz as MoreHorizIcon, Person as PersonIcon } from "@mui/icons-material"

// Define the student data type


// Sample student data
const studentData = [
  {
    id: "1234567811",
    name: "Jordan Nico",
    class: { level: "VII", section: "B" },
    fees: 52036,
    rank: "First",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "1234567811",
    name: "Jordan Nico",
    class: { level: "VII", section: "B" },
    fees: 52036,
    rank: "First",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "1234567812",
    name: "Karen Hope",
    class: { level: "VII", section: "A" },
    fees: 53036,
    rank: "First",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "1234567812",
    name: "Karen Hope",
    class: { level: "VII", section: "A" },
    fees: 53036,
    rank: "First",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "1234567813",
    name: "Nadia Adja",
    class: { level: "VII", section: "B" },
    fees: 54036,
    rank: "First",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

// Styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: "16px",
  "&.MuiTableCell-head": {
    backgroundColor: "#f5f3fa",
    color: "#555",
    fontWeight: 500,
    fontSize: "14px",
  },
}))

const ClassIconAvatar = styled(Avatar)(({ theme }) => ({
  width: 28,
  height: 28,
  backgroundColor: "#ff7043",
}))

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    minWidth: 28,
    height: 28,
    fontSize: 13,
  },
  "& .Mui-selected": {
    backgroundColor: "#6c63ff",
    color: "white",
    "&:hover": {
      backgroundColor: "#5a52d5",
    },
  },
}))

export default function UnpaidStudents() {
  const [page, setPage] = useState(1)
  const totalEntries = 10
  const entriesPerPage = 5

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const getAvatarBgColor = (name) => {
    if (name.includes("Jordan")) return "#333"
    if (name.includes("Karen")) return "#e74c3c"
    return "#e0e0e0"
  }

  const getAvatarColor = (name) => {
    if (name.includes("Nadia")) return "#666"
    return "white"
  }

  return (
    <Paper elevation={1} sx={{ borderRadius: "8px", overflow: "hidden" }}>
      {/* Header */}
      <Box sx={{ p: 2, borderBottom: "1px solid #f0f0f0" }}>
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "18px" }}>
          Unpaid Student Intuition
        </Typography>
      </Box>

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>
                Name{" "}
                <Typography component="span" color="#6c63ff" sx={{ ml: 0.5 }}>
                  *
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                ID{" "}
                <Typography component="span" color="#6c63ff" sx={{ ml: 0.5 }}>
                  *
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                Class{" "}
                <Typography component="span" color="#6c63ff" sx={{ ml: 0.5 }}>
                  *
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                Fees{" "}
                <Typography component="span" color="#6c63ff" sx={{ ml: 0.5 }}>
                  *
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                Rank{" "}
                <Typography component="span" color="#6c63ff" sx={{ ml: 0.5 }}>
                  *
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                Action{" "}
                <Typography component="span" color="#6c63ff" sx={{ ml: 0.5 }}>
                  *
                </Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentData.map((student, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 }, borderBottom: "1px solid #f0f0f0" }}
              >
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Avatar
                      sx={{
                        width: 36,
                        height: 36,
                        bgcolor: getAvatarBgColor(student.name),
                      }}
                    >
                      <PersonIcon sx={{ color: getAvatarColor(student.name), fontSize: 20 }} />
                    </Avatar>
                    <Typography>{student.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: "#6c63ff" }}>ID {student.id}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <ClassIconAvatar>
                      <PersonIcon sx={{ fontSize: 16 }} />
                    </ClassIconAvatar>
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        Class
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {student.class.level} {student.class.section}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontWeight: 500 }}>$ {student.fees.toLocaleString()}</TableCell>
                <TableCell sx={{ color: "#888" }}>{student.rank}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton size="small">
                      <PrintIcon sx={{ fontSize: 18, color: "#666" }} />
                    </IconButton>
                    <IconButton size="small">
                      <MoreHorizIcon sx={{ fontSize: 18, color: "#666" }} />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderTop: "1px solid #f0f0f0",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Showing 1 to 5 of 10 entries
        </Typography>
        <StyledPagination
          count={Math.ceil(totalEntries / entriesPerPage)}
          page={page}
          onChange={handlePageChange}
          size="small"
          shape="rounded"
        />
      </Box>
    </Paper>
  )
}

