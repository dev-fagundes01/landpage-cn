import styled from "styled-components";

export const Container = styled.div`
    header {
    animation: appear 900ms ease-in-out;
    }

    main {
        animation: appear 2s ease-in-out;
    }

    main :nth-child(2) {
        animation: appear 4s ease-in-out;
    }

    .div-footer{
        opacity: 0;
        transform: translateX(-100vw);
    }

    @keyframes appear {
        from {
        opacity: 0;
        translate: -100vw 0;
        }

        to {
        opacity: 1;
        translate: 0 0;
        }
    }
`