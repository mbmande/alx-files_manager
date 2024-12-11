import { ObjectId } from 'mongodb';

/**
 * ==================
 */
const basicUtils = {
  /**
   * -------------------
   * @return {b)
   *
   */
  isValidId(id) {
    try {
      ObjectId(id);
    } catch (err) {
      return false;
    }
    return true;
  },
};

export default basicUtils;
