import './Modal.css'

export default function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}> {/* Cierra el modal al hacer clic fuera del contenido */ }
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      > {/* Evita que el clic en el contenido cierre el modal */ }
        <button className="modal-close" onClick={onClose}>
          X
        </button>

        {children}
      </div>
    </div>
  )
}