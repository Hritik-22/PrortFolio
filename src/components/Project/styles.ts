import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 0.5rem;
     overflow: hidden;

    .project{
      padding: 2rem 1.5rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.50s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--blue);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: var(--blue);
        margin-bottom: 2.5rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
         text-align: center;
      }

      p{
      text-align:justify;
        letter-spacing: 0.12rem;
        margin: 2rem 0;
        
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          justify-content:center;
          gap: 1rem;
          font-size: 1.3rem;
          color: var(--red)
         
        }
      }

    }
  }


  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
     
    }
  }

  @media (max-width: 768px){
    .projects{
      grid-template-columns: 1fr;
       overflow: hidden;
    
        .animated {
      overflow: auto; !imporant;
    }
}
  }
 
`