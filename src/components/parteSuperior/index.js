import React from "react"
import {View, Text} from 'react-native'
import styles from "./styles"

export default function Superior (){
    return(
        <View style={styles.viewSuperior} >
            <View style={styles.viewQuadrado}> 
                <View style={styles.quadrado}>
                    
                </View>
                <View style={styles.retangulo}>
                    
                </View>
                
            </View>
                <View style={styles.viewBlocos}> 
                
                <View style={styles.blocoRoxo}> 
                </View>
                
                <View style={styles.blocoAzul}>
                 </View>
                
            </View>
        </View>
        
        
    
    )
}

