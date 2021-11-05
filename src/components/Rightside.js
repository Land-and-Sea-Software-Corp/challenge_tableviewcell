import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import reactImageSize from 'react-image-size';
import './Rightside.css';

export const Rightside = (props) => {

  const {imageUrl, textColor, fontSize, layout, firstLabel, secondLabel} = props
  const [cellHeight, setCellHeight] = useState('72px')

  console.log(props)

  useEffect(async () => {
    try {
      const { width, height } = await reactImageSize('./background/' + imageUrl);
      let cellEles = document.getElementById('cell')
      let cellEleWidth = cellEles.offsetWidth
      console.log(cellEles.offsetWidth, cellEles.offsetHeight)
      let cellEleHeight = Math.floor(height * cellEleWidth / width)   
      console.log(cellEleHeight, height, cellEleWidth, width)
      setCellHeight(cellEleHeight+'px')
      console.log(cellHeight)

    } catch {
      console.log("get image size error")
    }
  }, [imageUrl])


    return (
      <div id="cell" style={{fontSize:fontSize+'px', color:textColor, backgroundImage:'url(./background/'+imageUrl+')', backgroundSize:'100% auto', backgroundRepeat:'no-repeat', minHeight:cellHeight, width:'375px'}}>
        {
          layout == 1?
            <p style={{wordBreak: 'break-word', margin:'0', fontWeight:'bold'}}> {firstLabel} </p> 
            :
            <>
              <p style={{minHeight:'50%', wordBreak: 'break-word', margin:'0', fontWeight:'bold' }}> {firstLabel} </p> 
              <p style={{minHeight:'50%', wordBreak: 'break-word', margin:'0'}}> {secondLabel} </p> 
            </>
        }
      </div>

    )
}