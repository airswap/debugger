import { MdOutlineLibraryBooks } from 'react-icons/md';
import { FiXSquare } from 'react-icons/fi';
import { ReadContractErrorType } from 'viem';

export const LoadingOrFailed = ({
  orderText,
  orderParsingError,
  contractCallError,
}: {
  orderText: string | undefined;
  orderParsingError: unknown;
  contractCallError: ReadContractErrorType | null;
}) => {
  const isShowLoadingState = !!orderParsingError;

  return (
    <>
      <div className="flex flex-col items-center justify-center my-20">
        <div className="flex justify-center items-center h-[100px] w-[100px] bg-[#171A23] rounded-full">
          {isShowLoadingState ? (
            <FiXSquare size={22} />
          ) : (
            <MdOutlineLibraryBooks size={22} />
          )}
        </div>
        <p className="mt-8 mb-4 font-bold text-white">
          {!orderText && 'Load an order'}
          {isShowLoadingState && 'Failed to load'}
        </p>
        <p className="text-textDark">
          {/* FIXME: `contractCallError` updates slowly and does not render text correctly */}
          {contractCallError
            ? 'There is an issue reading the smart contract'
            : isShowLoadingState
              ? 'Check your JSON or URL'
              : 'Load JSON or by URL'}
        </p>
      </div>
    </>
  );
};
