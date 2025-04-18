// components/UserInfo.js
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Badge } from '@mui/material';
import { Phone } from '@mui/icons-material';
import useUser from '../hooks/useUser';
import "./StyleUser.scss"

function UserInfo() {
  const { users, loading, error } = useUser();  // Sử dụng hook mới

  if (loading) return <p>Đang tải thông tin người dùng...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Box className="box">
      {users.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>RoleName</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{user.fullName}</TableCell>
                  <TableCell>{user.userName || <span className="text-muted"></span>}</TableCell>
                  <TableCell>{user.email || <span className="text-muted"></span>}</TableCell>
                  <TableCell>{user.phoneNumber || <span className="text-muted"></span>}</TableCell>
                  <TableCell>{user.roleName || <span className="text-muted"></span>}</TableCell>
                  <TableCell className="status">
                    <Badge className={user.status ? 'status__active' : 'status__inactive'}>
                      {user.status ? 'Đang hoạt động' : 'Ngưng hoạt động'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <a href={`/Admin/User/UpdateUser/${user.id}`} className="btn">
                    </a>
                    <a href={`/Admin/User/DeleteUser/${user.id}`} className="btn btn-delete-user">
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>Không tìm thấy người dùng</p>
      )}
    </Box>
  );
}


export default UserInfo;
