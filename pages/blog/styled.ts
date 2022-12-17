import styled from "styled-components";
import Image from "next/image";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 32px;
`;

export const ThumbnailImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  border-radius: 5px;
`;
