/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  T: {
    width: '100%',
    height: '100%',
  },
  lineHr: {
    width: '100%',
    height: 1,
    backgroundColor: '#BEBEBE',
  },
  // header
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  headerIcon: {
    width: 20,
    height: 20,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  upHeaderButton: {
    backgroundColor: '#7ec1a5',
    borderRadius: 10,
    padding: 10,
    width: 70,
    height: 40,
  },
  textHeaderUp: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textHeader: {
    fontSize: 16,
    color: '#131313',
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  // body
  body: {
    paddingTop: 10,
  },
  body_avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    margin: 3,
    marginLeft: 15,
  },
  body_content: {
    marginLeft: 10,
  },
  body_name: {
    fontSize: 16,
    color: '#131313',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  body_chedo: {
    width: 120,
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: '#E5F3FF',
    borderRadius: 5,
  },
  body_content_icon: {
    width: 13,
    height: 13,
    marginLeft: 7,
  },
  body_chedo_icon: {
    width: 16,
    height: 16,
    resizeMode: 'cover',
    marginTop: 2,
    marginLeft: 0,
  },
  body_chedo_text: {
    fontSize: 14,
    color: '#0962c9',
    fontFamily: 'Roboto',
    fontWeight: '700',
    marginLeft: 2,
  },
  body_chedo_icon_down: {
    width: 10,
    height: 10,
    resizeMode: 'cover',
    marginTop: 2,
    marginLeft: 7,
  },
  body_content_input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    fontSize: 16,
    marginTop: 10,
    color: '#131313',
    fontFamily: 'Roboto',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    padding: 16,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 5,
    zIndex: 1,
  },
  bottomSheetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    marginLeft: 5,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#D6D6D6',
  },
  bottomSheetIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  bottomSheetText: {
    fontSize: 16,
    color: '#000',
  },
  pick_feelings: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  boder_image: {
    width: 110,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5F3FF',
    borderRadius: 5,
    marginLeft: 5,
  },
  avatar_icon_image: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
  },
  bottomSheetOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  // modal
  modalView: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainerColor: {
    width: '100%',
    height: '100%',
  },
});
