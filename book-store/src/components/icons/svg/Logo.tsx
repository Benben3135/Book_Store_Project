import { useEffect, useState } from "react";

interface LogoProps {
  width: number;
}

const Logo = ({ width }: LogoProps) => {
  const [widthState, setWidthState] = useState<number>(0);
  useEffect(() => {
    setWidthState(width);
  }, []);

  return (
    <div
      style={{ width: `${widthState}rem` }}
      className="flex flex-row justify-center items-center"
    >
      {/* TODO: change the logo for our logo */}
      <svg
        width="2000px"
        height="2000px"
        viewBox="0 0 1024 1024"
        version="1.1"
      >
        <path
          d="M888.301406 636.986705c-11.570928 0-20.907738-9.337834-20.907738-20.907738 0-11.570928 9.337834-20.907738 20.907738-20.907738s20.907738 9.337834 20.907739 20.907738c0.001024 11.569904-9.33681 20.907738-20.907739 20.907738z m0-27.60702c-3.654247 0-6.698258 3.045035-6.698258 6.698258s3.045035 6.698258 6.698258 6.698258 6.698258-3.045035 6.698258-6.698258c0.001024-3.653223-3.044011-6.698258-6.698258-6.698258z"
          fill="#F16723"
        />
        <path
          d="M156.310429 778.26957m-4.262434 0a4.262435 4.262435 0 1 0 8.524869 0 4.262435 4.262435 0 1 0-8.524869 0Z"
          fill=""
        />
        <path
          d="M132.560385 333.309485m-4.262434 0a4.262435 4.262435 0 1 0 8.524869 0 4.262435 4.262435 0 1 0-8.524869 0Z"
          fill=""
        />
        <path
          d="M897.84197 274.238469m-4.262435 0a4.262435 4.262435 0 1 0 8.524869 0 4.262435 4.262435 0 1 0-8.524869 0Z"
          fill=""
        />
        <path
          d="M373.106884 70.028637m-4.262435 0a4.262435 4.262435 0 1 0 8.52487 0 4.262435 4.262435 0 1 0-8.52487 0Z"
          fill=""
        />
        <path
          d="M868.813797 553.353704m-4.262435 0a4.262435 4.262435 0 1 0 8.524869 0 4.262435 4.262435 0 1 0-8.524869 0Z"
          fill=""
        />
        <path
          d="M907.789016 744.978962m-4.262435 0a4.262435 4.262435 0 1 0 8.524869 0 4.262435 4.262435 0 1 0-8.524869 0Z"
          fill=""
        />
        <path
          d="M191.631401 134.579487c-13.397539 0-24.156526-10.758987-24.156526-24.156526s10.758987-24.156526 24.156526-24.156527 24.156526 10.758987 24.156527 24.156527-10.758987 24.156526-24.156527 24.156526z m0-34.102548c-5.480858 0-9.947046 4.466188-9.947046 9.947046s4.466188 9.947046 9.947046 9.947045 9.947046-4.466188 9.947046-9.947045-4.466188-9.947046-9.947046-9.947046z"
          fill="#FBD20A"
        />
        <path
          d="M146.769866 650.384245h-7.10474v-7.10474c0-3.856976-3.247764-7.10474-7.104741-7.104741s-7.10474 3.247764-7.10474 7.104741v7.10474h-7.10474c-3.856976 0-7.10474 3.247764-7.104741 7.10474s3.247764 7.10474 7.104741 7.104741h7.10474v7.10474c0 3.856976 3.247764 7.10474 7.10474 7.10474s7.10474-3.247764 7.104741-7.10474v-7.10474h7.10474c3.856976 0 7.10474-3.247764 7.10474-7.104741s-3.247764-7.10474-7.10474-7.10474z"
          fill="#F16723"
        />
        <path
          d="M875.310349 219.633641m-6.292799 0a6.292799 6.292799 0 1 0 12.585598 0 6.292799 6.292799 0 1 0-12.585598 0Z"
          fill=""
        />
        <path
          d="M883.023277 808.109684h-7.10474v-7.104741c0-3.856976-3.247764-7.10474-7.10474-7.10474s-7.10474 3.247764-7.10474 7.10474v7.104741h-7.104741c-3.856976 0-7.10474 3.247764-7.10474 7.10474s3.247764 7.10474 7.10474 7.10474h7.104741v7.104741c0 3.856976 3.247764 7.10474 7.10474 7.10474s7.10474-3.247764 7.10474-7.10474v-7.104741h7.10474c3.856976 0 7.10474-3.247764 7.104741-7.10474s-3.247764-7.10474-7.104741-7.10474z"
          fill="#4E9BD4"
        />
        <path
          d="M819.487097 284.997456l-5.074375-2.638552V136.203369H292.924376c-41.613771 0-75.309837 33.69709-75.309837 75.309838 0 2.435823 0.202729 4.668917 0.406483 6.90201h-0.406483v666.018974c0 33.087878 26.795079 59.882957 59.882957 59.882957h485.152703c33.087878 0 59.882957-26.795079 59.882957-59.882957V285.200186l-3.046059-0.20273z"
          fill="#FFFFFF"
        />
        <path
          d="M819.892556 284.997456l-4.262435-2.638552V136.203369H364.580991c-35.92916 0-65.161086 33.69709-65.161086 75.309838 0 2.435823 0.202729 4.668917 0.202729 6.90201h-0.202729v666.018974c0 33.087878 23.140832 59.882957 51.763546 59.882957h419.585135c28.62169 0 51.763546-26.795079 51.763546-59.882957V285.200186l-2.639576-0.20273z"
          fill="#3769A5"
        />
        <path
          d="M768.130033 284.997456l-4.262434-2.638552V136.203369h-441.509591c-35.117219 0-63.739933 33.69709-63.739933 75.309838 0 2.435823 0.202729 4.668917 0.202729 6.90201h-0.202729v666.018974c0 33.087878 22.735374 59.882957 50.747852 59.882957h410.856512c28.012479 0 50.747852-26.795079 50.747852-59.882957V285.200186l-2.840258-0.20273z"
          fill="#4E9BD4"
        />
        <path
          d="M814.412722 286.214856v-89.316589c0-14.615963-11.976387-26.59235-26.795079-26.592349H295.3602c-33.899819 0-61.30411 27.404291-61.30411 61.30411v26.185867s21.111492 26.59235 67.799638 28.216232c46.688147 1.827635 512.556994 0.202729 512.556994 0.202729zM278.917625 818.664918c-3.856976 0-7.10474-3.247764-7.10474-7.104741v-66.581215c0-3.856976 3.247764-7.10474 7.10474-7.10474s7.10474 3.247764 7.10474 7.10474v66.581215c0 3.856976-3.247764 7.10474-7.10474 7.104741z"
          fill="#FFFFFF"
        />
        <path
          d="M217.614539 467.487609c-6.698258 0-12.179116-5.480858-12.179116-12.179116v-42.83117c0-6.698258 5.480858-12.179116 12.179116-12.179116s12.179116 5.480858 12.179116 12.179116v42.83117c0 6.698258-5.480858 12.179116-12.179116 12.179116zM822.532132 633.941671c-6.698258 0-12.179116 5.480858-12.179116 12.179115v239.530805c0 26.388596-21.314221 47.702817-47.702817 47.702817H277.496472c-26.388596 0-47.702817-21.314221-47.702817-47.702817V483.727455c0-6.699282-5.480858-12.179116-12.179116-12.179116s-12.179116 5.480858-12.179116 12.179116v401.92516c0 39.786136 32.275937 72.062073 72.062073 72.062073h485.152703c39.786136 0 72.062073-32.275937 72.062073-72.062073V646.120786c-0.001024-6.698258-5.481882-12.179116-12.18014-12.179115zM834.508519 284.794727v-0.406482c0-0.609212-0.202729-1.01467-0.406482-1.623883v-0.202729c-0.202729-0.406482-0.406482-1.01467-0.609212-1.421153 0 0 0-0.202729-0.202729-0.202729-0.202729-0.406482-0.609212-1.01467-0.811942-1.421153l-0.202729-0.202729c-0.202729-0.406482-0.609212-0.811941-1.01467-1.218424 0 0 0-0.202729-0.202729-0.202729-0.406482-0.405459-0.811941-0.811941-1.218424-1.01467l-0.202729-0.20273c-0.405459-0.406482-0.811941-0.609212-1.421153-0.811941-0.406482-0.202729-1.01467-0.406482-1.421153-0.609211h-0.202729V136.00064c0-6.698258-5.480858-12.179116-12.179116-12.179116H292.924376c-48.312029 0-87.489977 39.177948-87.489977 87.489977 0 2.030365 0 4.059705 0.20273 6.09007-0.202729 0.811941-0.202729 1.623882-0.20273 2.233094v163.611755c0 6.699282 5.480858 12.179116 12.179116 12.179116s12.179116-5.480858 12.179116-12.179116V271.802646c16.036092 16.645304 38.366007 26.997808 63.130722 26.997808h517.427616v317.277489c0 6.698258 5.480858 12.179116 12.179116 12.179116s12.179116-5.480858 12.179116-12.179116V286.621338c0.002048-0.609212 0.002048-1.218424-0.200682-1.826611z m-32.275937-10.352505H292.924376c-18.471915 0-35.117219-7.916681-46.688146-20.705009v-21.923432c0-26.997808 22.126162-49.12397 49.12397-49.12397H787.616619c8.119411 0 14.615963 6.495529 14.615963 14.41221v77.340201z m0-113.270385c-4.466188-1.826611-9.540563-2.842306-14.615963-2.842306H295.3602c-26.997808 0-50.545123 14.615963-63.333451 36.132913 7.30747-26.59235 31.869455-46.282688 60.897627-46.282688h509.308206v12.992081z"
          fill=""
        />
        <path
          d="M278.917625 380.404115c-3.856976 0-7.10474-3.247764-7.10474-7.104741 0-31.463996 25.576655-57.040651 57.040651-57.040651 3.856976 0 7.10474 3.247764 7.104741 7.10474s-3.247764 7.10474-7.104741 7.104741c-23.547315 0-42.831171 19.283856-42.831171 42.83117 0 3.856976-3.247764 7.10474-7.10474 7.104741zM278.917625 417.754428c-3.856976 0-7.10474-3.247764-7.10474-7.104741v-11.164445c0-3.856976 3.247764-7.10474 7.10474-7.104741s7.10474 3.247764 7.10474 7.104741v11.164445c0 3.856976-3.247764 7.10474-7.10474 7.104741zM605.735678 540.158894H423.652007c-12.788328 0-23.344585-10.352505-23.344585-23.344585v-88.504648c0-12.788328 10.352505-23.344585 23.344585-23.344585h182.084694c12.788328 0 23.344585 10.352505 23.344586 23.344585v88.504648c-0.001024 12.789352-10.353528 23.344585-23.345609 23.344585z"
          fill="#FFFFFF"
        />
        <path
          d="M605.735678 552.339034H423.652007c-19.487609 0-35.523701-16.036092-35.523701-35.523701v-88.504648c0-19.487609 16.036092-35.523701 35.523701-35.523701h182.084694c19.487609 0 35.523701 16.036092 35.523702 35.523701v88.504648c-0.001024 19.486586-16.037116 35.523701-35.524725 35.523701z m-182.083671-135.193818c-6.09007 0-11.164446 5.074376-11.164446 11.164445v88.504648c0 6.09007 5.074376 11.164446 11.164446 11.164445h182.084694c6.09007 0 11.164446-5.074376 11.164446-11.164445v-88.504648c0-6.09007-5.074376-11.164446-11.164446-11.164445H423.652007z"
          fill=""
        />
        <path
          d="M739.101861 77.133377h-7.104741v-7.10474c0-3.856976-3.247764-7.10474-7.10474-7.10474s-7.10474 3.247764-7.10474 7.10474v7.10474h-7.10474c-3.856976 0-7.10474 3.247764-7.104741 7.10474s3.247764 7.10474 7.104741 7.104741h7.10474v7.10474c0 3.856976 3.247764 7.10474 7.10474 7.10474s7.10474-3.247764 7.10474-7.10474v-7.10474h7.104741c3.856976 0 7.10474-3.247764 7.10474-7.104741s-3.247764-7.10474-7.10474-7.10474z"
          fill="#FBD20A"
        />
      </svg>
    </div>
  );
};

export default Logo;