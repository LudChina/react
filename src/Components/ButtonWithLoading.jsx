import React from "react";
import { Button, Spinner } from "react-bootstrap";

const styles = {
  button: {
    marginRight: '10px',
    background: 'pink',
    border: 'pink',
    fontWeight: 'bold',
  }
}

function ButtonWithLoading({
  variant = "primary",
  type = "submit",
  loading,
  children,
}) {
  return (
    <Button type={type} variant={variant} style={styles.button} disabled={loading}>
      {loading && <Spinner animation="border" size="sm" />}
      {children}
    </Button>
  );
}
export default ButtonWithLoading;
