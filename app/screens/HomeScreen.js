import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Toast } from '../native components';

const HomeScreen = () => {
  const [showToast, setShowToast] = useState(true);

  return (
    <View style={styles.container}>
      {showToast ? (
        <Toast
          title="hello mfackas"
          duration={2000}
          isFinished={() => setShowToast(false)}
          error
        />
      ) : null}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
