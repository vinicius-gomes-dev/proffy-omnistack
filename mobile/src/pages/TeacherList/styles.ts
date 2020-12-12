import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7'
    },

    searchForm: {
        marginBottom: 24
    },

    label: {
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF'
    },
    
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        width: '48%'
    },

    input: {
        backgroundColor: '#FFF',
        height: 54,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },

    submitButton: {
        backgroundColor: '#04D361',
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitButtonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        color: '#FFF'
    },
    
    teacherList: {
        marginTop: -40
    }
});

export default styles;