/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import type {TurboModule} from 'RCTExport';
import * as TurboModuleRegistry from 'TurboModuleRegistry';

export interface Spec extends TurboModule {
  +getCurrentBoldTextState: (
    onSuccess: (isBoldTextEnabled: boolean) => void,
    onError: (error: Object) => void,
  ) => void;
  +getCurrentGrayscaleState: (
    onSuccess: (isGrayscaleEnabled: boolean) => void,
    onError: (error: Object) => void,
  ) => void;
  +getCurrentInvertColorsState: (
    onSuccess: (isInvertColorsEnabled: boolean) => void,
    onError: (error: Object) => void,
  ) => void;
  +getCurrentReduceMotionState: (
    onSuccess: (isReduceMotionEnabled: boolean) => void,
    onError: (error: Object) => void,
  ) => void;
  +getCurrentReduceTransparencyState: (
    onSuccess: (isReduceTransparencyEnabled: boolean) => void,
    onError: (error: Object) => void,
  ) => void;
  +getCurrentVoiceOverState: (
    onSuccess: (isScreenReaderEnabled: boolean) => void,
    onError: (error: Object) => void,
  ) => void;
  +setAccessibilityFocus: (reactTag: number) => void;
  +announceForAccessibility: (announcement: string) => void;
}

export default TurboModuleRegistry.get<Spec>('AccessibilityManager');
