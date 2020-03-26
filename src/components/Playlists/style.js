import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Button = styled.button`
  width: 100%;
`

export const Name = styled.p`
  font-weight: 600;
  margin-top: 14px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Image = styled.div`
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  border-radius: 2px;
  width: 100%;
  padding-top: 100%;

  background-size: cover;
  background-position: center;
`

export const Handle = styled.div`
  position: relative;
  width: 100%;
`

export const EditLayer = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #00000096;
  display: flex;

  img {
    width: 40px;
    margin: auto;
  }
`
