import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

function QuadraticForm() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (a === '' || b === '' || c === '') {
      return Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
    }

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      return Swal.fire('Error', 'Los valores deben ser números', 'error');
    }

    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    const discriminante = Math.pow(bNum, 2) - 4 * aNum * cNum;

    if (aNum === 0) {
      return Swal.fire('Error', 'El valor de "a" no puede ser 0', 'error');
    }

    if (discriminante < 0) {
      return Swal.fire('Sin solución real', 'La ecuación no tiene soluciones reales', 'warning');
    }

    const x1 = (-bNum + Math.sqrt(discriminante)) / (2 * aNum);
    const x2 = (-bNum - Math.sqrt(discriminante)) / (2 * aNum);

    Swal.fire(
      'Resultado',
      `Las soluciones son:\n x₁ = ${x1.toFixed(2)}\n x₂ = ${x2.toFixed(2)}`,
      'success'
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Calculadora de Fórmula Cuadrática</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Coeficiente a:</label>
          <input type="text" className="form-control" value={a} onChange={(e) => setA(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Coeficiente b:</label>
          <input type="text" className="form-control" value={b} onChange={(e) => setB(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Coeficiente c:</label>
          <input type="text" className="form-control" value={c} onChange={(e) => setC(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Calcular</button>
      </form>
    </div>
  );
}

export default QuadraticForm;
