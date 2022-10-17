import styled from '@emotion/styled'
import '../styles/Spinner.css'

const ContenedorSpiner = styled.div`
    position: relative;
    display: flex;
    margin-top: 50px;
    justify-content: center;
    align-items: center;    
`

const Spinner = () => {
  return (
    <ContenedorSpiner>
        <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    </ContenedorSpiner>
  )
}

export default Spinner