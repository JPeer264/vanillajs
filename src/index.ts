import IntlJS from './Objects/Intl';
import PromiseJS from './Objects/Promise';
import ProxyJS from './Objects/Proxy';
import ReflectJS from './Objects/Reflect';
import WebAssemblyJS from './Objects/WebAssembly';

// Value properties
import InfinityJS from './Value/Infinity';
import NaNJS from './Value/NaN';
import undefinedJS from './Value/undefined';

// Function properties
import decodeURIJS from './Function/decodeURI';
import decodeURIComponentJS from './Function/decodeURIComponent';
import encodeURIJS from './Function/encodeURI';
import encodeURIComponentJS from './Function/encodeURIComponent';
import isFiniteJS from './Function/isFinite';
import isNaNJS from './Function/isNaN';
import parseFloatJS from './Function/parseFloat';
import parseIntJS from './Function/parseInt';

// Fundamental objects
import BooleanJS from './Fundamental/Boolean';
import FunctionJS from './Fundamental/Function';
import ObjectJS from './Fundamental/Object';
import SymbolJS from './Fundamental/Symbol';

// Fundamental Error objects
import ErrorJS from './Error/Error';
import EvalErrorJS from './Error/EvalError';
import RangeErrorJS from './Error/RangeError';
import ReferenceErrorJS from './Error/ReferenceError';
import SyntaxErrorJS from './Error/SyntaxError';
import TypeErrorJS from './Error/TypeError';
import URIErrorJS from './Error/URIError';

// Number and dates
import BigIntJS from './Numbers/BigInt';
import DateJS from './Numbers/Date';
import MathJS from './Numbers/Math';
import NumberJS from './Numbers/Number';

// Text
import RegExpJS from './Text/RegExp';
import StringJS from './Text/String';

// Indexed collections
import ArrayJS from './IndexedCollection/Array';
import BigInt64ArrayJS from './IndexedCollection/BigInt64Array';
import BigUint64ArrayJS from './IndexedCollection/BigUint64Array';
import Float32ArrayJS from './IndexedCollection/Float32Array';
import Float64ArrayJS from './IndexedCollection/Float64Array';
import Int8ArrayJS from './IndexedCollection/Int8Array';
import Int16ArrayJS from './IndexedCollection/Int16Array';
import Int32ArrayJS from './IndexedCollection/Int32Array';
import Uint8ArrayJS from './IndexedCollection/Uint8Array';
import Uint8ClampedArrayJS from './IndexedCollection/Uint8ClampedArray';
import Uint16ArrayJS from './IndexedCollection/Uint16Array';
import Uint32ArrayJS from './IndexedCollection/Uint32Array';

// Keyed collections
import MapJS from './KeyedCollection/Map';
import SetJS from './KeyedCollection/Set';
import WeakMapJS from './KeyedCollection/WeakMap';
import WeakSetJS from './KeyedCollection/WeakSet';

// Structured data
import ArrayBufferJS from './StructuredData/ArrayBuffer';
import AtomicsJS from './StructuredData/Atomics';
import DataViewJS from './StructuredData/DataView';
import JSONJS from './StructuredData/JSON';
import SharedArrayBufferJS from './StructuredData/SharedArrayBuffer';

export const Intl = IntlJS;
export const Promise = PromiseJS;
export const Proxy = ProxyJS;
export const Reflect = ReflectJS;
export const WebAssembly = WebAssemblyJS;

// Value properties
export const Infinity = InfinityJS;
export const NaN = NaNJS;
export const undefined = undefinedJS as undefined;

// Function properties
export const decodeURI = decodeURIJS;
export const decodeURIComponent = decodeURIComponentJS;
export const encodeURI = encodeURIJS;
export const encodeURIComponent = encodeURIComponentJS;
export const isFinite = isFiniteJS;
export const isNaN = isNaNJS;
export const parseFloat = parseFloatJS;
export const parseInt = parseIntJS;

// Fundamental objects
export const Boolean = BooleanJS;
export const Function = FunctionJS;
export const Object = ObjectJS;
export const Symbol = SymbolJS;

// Fundamental Error objects
export const Error = ErrorJS;
export const EvalError = EvalErrorJS;
export const RangeError = RangeErrorJS;
export const ReferenceError = ReferenceErrorJS;
export const SyntaxError = SyntaxErrorJS;
export const TypeError = TypeErrorJS;
export const URIError = URIErrorJS;

// Number and dates
export const BigInt = BigIntJS;
export const Date = DateJS;
export const Math = MathJS;
export const Number = NumberJS;

// Text processing
export const RegExp = RegExpJS;
export const String = StringJS;

// Indexed collections
export const Array = ArrayJS;
export const BigInt64Array = BigInt64ArrayJS;
export const BigUint64Array = BigUint64ArrayJS;
export const Float32Array = Float32ArrayJS;
export const Float64Array = Float64ArrayJS;
export const Int8Array = Int8ArrayJS;
export const Int16Array = Int16ArrayJS;
export const Int32Array = Int32ArrayJS;
export const Uint8Array = Uint8ArrayJS;
export const Uint8ClampedArray = Uint8ClampedArrayJS;
export const Uint16Array = Uint16ArrayJS;
export const Uint32Array = Uint32ArrayJS;

// Keyed collections
export const Map = MapJS;
export const Set = SetJS;
export const WeakMap = WeakMapJS;
export const WeakSet = WeakSetJS;

// Structured data
export const ArrayBuffer = ArrayBufferJS;
export const Atomics = AtomicsJS;
export const DataView = DataViewJS;
export const JSON = JSONJS;
export const SharedArrayBuffer = SharedArrayBufferJS;
