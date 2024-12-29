import styles from "./FieldLayout.module.css";
import PropTypes from "prop-types";

export const FieldLayout = (props) => {
  return (
    <>
      {props.field.map((fieldElelem, key) => {
        return (
          <div
            className={styles.cell}
            key={key}
            onClick={() => props.onFieldClick(fieldElelem, key)}
          >
            {fieldElelem}
          </div>
        );
      })}
    </>
  );
};

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(
    PropTypes.string // предполагается, что элементы массива - строки
  ),

  onFieldClick: PropTypes.func,
};
