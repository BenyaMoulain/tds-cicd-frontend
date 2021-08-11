import { makeStyles, TableCell, TableRow } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

const useStyles = makeStyles({
  icon: {
    cursor: "pointer",
    margin: "0rem 0.5rem",
  },
});

export const User = ({
  index,
  id,
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
  setData,
  toggleEditModal,
  deleteHandler,
}) => {
  const classes = useStyles();
  const editHandler = () => {
    setData({
      id,
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
    });
    toggleEditModal();
  };
  return (
    <TableRow>
      <TableCell>{index}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{lastname}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{organization}</TableCell>
      <TableCell>
        <div>
          <Edit className={classes.icon} onClick={() => editHandler()}>
            Editar
          </Edit>
          <Delete
            id="deleteButton"
            className={classes.icon}
            onClick={() => deleteHandler()}
          >
            Borrar
          </Delete>
        </div>
      </TableCell>
    </TableRow>
  );
};
