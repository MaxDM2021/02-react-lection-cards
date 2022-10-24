import styled from '@emotion/styled';


export const Text = styled.p`
color: ${p => p.theme.colors.red};
font-family: ${p=>p.theme.fonts.body};
font-size: ${p=>p.theme.fontSizes.xl};
padding-top: ${p=>p.theme.space[8]}px;
padding-bottom: ${p=>p.theme.space[8]}px;
`