import {
  Button,
  makeStyles,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { CreateButton } from "./CreateButton";
import { initialUserDataState } from "./initialUserDataState";
import { User } from "./User";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: "25rem",
    backgroundColor: theme.palette.background.paper,
    border: "0.13rem solid black",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  input: {
    width: "100%",
    margin: "1rem 0rem",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    verticalAlign: "center",
  },
  title: {
    margin: "2rem",
  },
}));

const USERS_API_URL = "http://localhost:3001/api/v1/users/";
const Users = (props) => {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [userData, setUserData] = useState(initialUserDataState);

  const getUsers = async () => {
    const response = await axios.get(USERS_API_URL);
    setUsers(response.data);
  };

  const saveUser = async (user) => {
    await axios.post(USERS_API_URL, user);
    getUsers();
  };

  const updateUser = async (id, user) => {
    await axios.put(`${USERS_API_URL}${id}`, user);
    getUsers();
  };

  const deleteUser = async (id) => {
    await axios.delete(`${USERS_API_URL}${id}`);
    getUsers();
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getUsers();
    }
    return () => {
      mounted = false;
    };
  }, []);

  const toggleAddModal = () => {
    setAddModalVisible(!addModalVisible);
    setUserData(initialUserDataState);
  };

  const toggleEditModal = () => {
    setEditModalVisible(!editModalVisible);
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    await setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const usersData = users.map(
    (
      {
        _id: id,
        name,
        lastname,
        secondLastname,
        birthday,
        email,
        rut,
        phone,
        organization,
        organizationPhone,
        organizationWeb,
      },
      index
    ) => {
      return (
        <User
          key={id}
          id={id}
          index={index}
          name={name}
          lastname={lastname}
          secondLastname={secondLastname}
          birthday={birthday}
          email={email}
          rut={rut}
          phone={phone}
          organization={organization}
          organizationPhone={organizationPhone}
          organizationWeb={organizationWeb}
          setData={setUserData}
          toggleEditModal={toggleEditModal}
          deleteHandler={() => deleteUser(id)}
        />
      );
    }
  );

  const addForm = (
    <div className={classes.modal}>
      <h2>Agregar Usuario</h2>
      <form noValidate autoComplete="off">
        <TextField
          className={classes.input}
          id="addFormNameInput"
          name="name"
          label="Nombre"
          onChange={handleChange}
        />
        <TextField
          className={classes.input}
          id="addFormLastnameInput"
          name="lastname"
          label="Apellido paterno"
          onChange={handleChange}
        />
        <TextField
          className={classes.input}
          id="addFormSecondLastnameInput"
          name="secondLastname"
          label="Apellido materno"
          onChange={handleChange}
        />
        <TextField
          className={classes.input}
          id="addFormBirthdayInput"
          name="birthday"
          label="Fecha de nacimiento"
          onChange={handleChange}
        />
        <TextField
          className={classes.input}
          id="addFormEmailInput"
          name="email"
          label="Email"
          onChange={handleChange}
        />
        <TextField
          className={classes.input}
          id="addFormRutInput"
          name="rut"
          label="Rut"
          onChange={handleChange}
        />
        <TextField
          className={classes.input}
          id="addFormPhoneInput"
          name="phone"
          label="Teléfono personal"
          onChange={handleChange}
        />
        <TextField
          className={classes.input}
          id="addFormOrganizationInput"
          name="organization"
          label="Organización"
          onChange={handleChange}
        />
        <TextField
          className={classes.input}
          id="addFormOrganizationAddressInput"
          name="organizationAddress"
          label="Dirección de la organización"
          onChange={handleChange}
        />
        <TextField
          className={classes.input}
          id="addFormOrganizationPhoneInput"
          name="organizationPhone"
          label="Teléfono corporativo"
          onChange={handleChange}
        />
        <TextField
          className={classes.input}
          id="addFormOrganizationWebInput"
          name="organizationWeb"
          label="Web organización"
          onChange={handleChange}
        />
        <br />
        <div align="right">
          <Button
            color="primary"
            id="addUserButton"
            onClick={() => {
              saveUser({ ...userData });
              toggleAddModal();
            }}
          >
            Agregar
          </Button>
          <Button
            id="cancelAddButton"
            onClick={() => {
              toggleAddModal();
            }}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );

  const editForm = (
    <div className={classes.modal}>
      <h2>Editar Usuario</h2>
      <form noValidate autoComplete="off">
        <TextField
          className={classes.input}
          id="editNameInput"
          name="name"
          label="Nombre"
          onChange={handleChange}
          value={userData && userData.name}
        />
        <TextField
          className={classes.input}
          id="editLastnameInput"
          name="lastname"
          label="Apellido Paterno"
          onChange={handleChange}
          value={userData && userData.lastname}
        />
        <TextField
          className={classes.input}
          id="editSecondLastnameInput"
          name="secondLastname"
          label="Apellido materno"
          onChange={handleChange}
          value={userData && userData.secondLastname}
        />
        <TextField
          className={classes.input}
          id="editBirthdayInput"
          name="birthday"
          label="Fecha de nacimiento"
          onChange={handleChange}
          value={userData && userData.birthday}
        />
        <TextField
          className={classes.input}
          id="editEmailInput"
          name="email"
          label="Email"
          onChange={handleChange}
          value={userData && userData.email}
        />
        <TextField
          className={classes.input}
          id="editRutInput"
          name="rut"
          label="Rut"
          onChange={handleChange}
          value={userData && userData.rut}
        />
        <TextField
          className={classes.input}
          id="editPhoneInput"
          name="phone"
          label="Teléfono personal"
          onChange={handleChange}
          value={userData && userData.phone}
        />
        <TextField
          className={classes.input}
          id="editOrganizationInput"
          name="organization"
          label="Organización"
          onChange={handleChange}
          value={userData && userData.organization}
        />
        <TextField
          className={classes.input}
          id="editOrganizationAddressInput"
          name="organizationAddress"
          label="Dirección de la organización"
          onChange={handleChange}
          value={userData && userData.organizationAddress}
        />
        <TextField
          className={classes.input}
          id="editOrganizationPhoneInput"
          name="organizationPhone"
          label="Teléfono corporativo"
          onChange={handleChange}
          value={userData && userData.organizationPhone}
        />
        <TextField
          className={classes.input}
          id="editOrganizationWebInput"
          name="organizationWeb"
          label="Web organización"
          onChange={handleChange}
          value={userData && userData.organizationWeb}
        />
        <br />
        <div align="right">
          <Button
            id="editButton"
            color="primary"
            onClick={() => {
              updateUser(userData.id, { ...userData });
              toggleEditModal();
            }}
          >
            Editar
          </Button>
          <Button id="cancelEditButton" onClick={() => toggleEditModal()}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <div className={classes.header}>
        <h1 className={classes.title}>Usuarios</h1>
        <span className={classes.createButton}>
          <CreateButton id="createButton" onClick={() => toggleAddModal()}>
            Crear
          </CreateButton>
        </span>
      </div>
      <TableContainer>
        <Table id="users">
          <TableHead>
            <TableRow>
              <TableCell>Nº</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Organización</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{usersData}</TableBody>
        </Table>
      </TableContainer>
      <Modal open={addModalVisible} onClose={toggleAddModal}>
        {addForm}
      </Modal>
      <Modal open={editModalVisible} onClose={toggleEditModal}>
        {editForm}
      </Modal>
    </div>
  );
};

export default Users;
