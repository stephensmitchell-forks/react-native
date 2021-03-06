/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * <p>This source code is licensed under the MIT license found in the LICENSE file in the root
 * directory of this source tree.
 */
package com.facebook.react.fabric.mounting.mountitems;

import com.facebook.react.fabric.mounting.MountingManager;

public class InsertMountItem implements MountItem {

  private int mReactTag;
  private int mParentReactTag;
  private int mIndex;

  public InsertMountItem(int reactTag, int parentReactTag, int index) {
    mReactTag = reactTag;
    mParentReactTag = parentReactTag;
    mIndex = index;
  }

  @Override
  public void execute(MountingManager mountingManager) {
    mountingManager.addViewAt(mParentReactTag, mReactTag, mIndex);
  }

  public int getParentReactTag() {
    return mParentReactTag;
  }

  public int getIndex() {
    return mIndex;
  }

  @Override
  public String toString() {
    return "InsertMountItem ["
        + mReactTag
        + "] - parentTag: "
        + mParentReactTag
        + " - index: "
        + mIndex;
  }
}
