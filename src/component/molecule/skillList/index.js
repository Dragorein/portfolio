import React from 'react'
import { ImageCard } from '../../atom'
import {
    ExpressJsIllustration,
    FirebaseIllustration,
    GitIllustration,
    JavascriptIllustration,
    MysqlIllustration,
    NodeJsIllustration,
    PostgreSqlIllustration,
    ReactIllustration
} from '../../../assets'

const SkillList = () => {
    return (
        <div className='skillListContainer' style={{
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center',
            flexWrap : 'wrap',
            width : '100vw',
            maxWidth : '65rem',
        }}>
            <ImageCard>
                <img src={JavascriptIllustration} alt='JavascriptIllustration' className='JavascriptIllustration' style={styles.item}/>
            </ImageCard>

            <ImageCard>
                <img src={NodeJsIllustration} alt='NodeJsIllustration' className='NodeJsIllustration' style={styles.item}/>
            </ImageCard>

            <ImageCard>
                <img src={ExpressJsIllustration} alt='ExpressJsIllustration' className='ExpressJsIllustration' style={styles.item}/>
            </ImageCard>

            <ImageCard>
                <img src={ReactIllustration} alt='ReactIllustration' className='ReactIllustration' style={styles.item}/>
            </ImageCard>

            <ImageCard>
                <img src={GitIllustration} alt='GitIllustration' className='GitIllustration' style={styles.item}/>
            </ImageCard>

            <ImageCard>
                <img src={MysqlIllustration} alt='MysqlIllustration' className='MysqlIllustration' style={styles.item}/>
            </ImageCard>

            <ImageCard>
                <img src={PostgreSqlIllustration} alt='PostgreSqlIllustration' className='PostgreSqlIllustration' style={styles.item}/>
            </ImageCard>
            
            <ImageCard>
                <img src={FirebaseIllustration} alt='FirebaseIllustration' className='FirebaseIllustration' style={styles.item}/>
            </ImageCard>
        </div>
    )
}

export default SkillList;

const styles = {
    item : {
        margin: '2rem',
        width : '10rem',
        height : '10rem',
    }
}
