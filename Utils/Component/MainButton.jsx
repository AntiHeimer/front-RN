import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function MainButtonBlack({text, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        styles.bigButtonContainer,
        styles.blackButtonContainer,
      ]}>
      <Text style={[styles.bigButtonText, styles.blackButtonText]}>{text}</Text>
    </TouchableOpacity>
  );
}

function MainButtonGray({text, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        styles.bigButtonContainer,
        styles.grayButtonContainer,
      ]}>
      <Text style={[styles.bigButtonText, styles.grayButtonText]}>{text}</Text>
    </TouchableOpacity>
  );
}

function MainMediumButtonBlack({text, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        styles.mediumButtonContainer,
        styles.blackButtonContainer,
      ]}>
      <Text style={[styles.mediumButtonText, styles.blackButtonText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

function MainMediumButtonGray({text, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        styles.mediumButtonContainer,
        styles.grayButtonContainer,
      ]}>
      <Text style={[styles.mediumButtonText, styles.grayButtonText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

function MainSmallButtonBlack({text, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        styles.smallButtonContainer,
        styles.blackButtonContainer,
      ]}>
      <Text style={[styles.smallButtonText, styles.blackButtonText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

function MainSmallButtonGray({text, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        styles.smallButtonContainer,
        styles.grayButtonContainer,
      ]}>
      <Text style={[styles.smallButtonText, styles.grayButtonText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export {
  MainButtonBlack,
  MainButtonGray,
  MainMediumButtonBlack,
  MainMediumButtonGray,
  MainSmallButtonBlack,
  MainSmallButtonGray,
};

const styles = StyleSheet.create({
  blackButtonContainer: {
    backgroundColor: 'black',
  },
  grayButtonContainer: {
    borderColor: '#F2F2F2',
    backgroundColor: '#F2F2F2',
  },
  blackButtonText: {
    color: 'white',
  },
  grayButtonText: {
    color: 'black',
  },
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigButtonContainer: {
    width: 308,
    height: 55,
  },
  mediumButtonContainer: {
    width: 159,
    height: 55,
  },
  smallButtonContainer: {
    width: 60,
    height: 34,
  },
  bigButtonText: {
    fontSize: 20,
  },
  mediumButtonText: {
    fontSize: 20,
  },
  smallButtonText: {
    fontSize: 12,
  },
});
