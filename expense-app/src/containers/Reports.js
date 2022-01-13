import { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { useVerify } from '../hooks';
import { dataList, defaultColor } from '../constants';
import buildChart from '../utils';

const Reports = () => {
  const chartContainer = useRef(null);
  const { isLoading } = useVerify();
  const lists = useSelector((state) => state.lists);
  const expenditure = useSelector((state) => state.reports);

  const allCategories = lists?.map(({ id, name }) => {
    const total = expenditure
      ?.filter((expense) => expense.list_id === id)
      .reduce((sum, expense) => sum + expense.amount, 0);
    return { name, total };
  });

  const initChartData = useCallback(() => {
    const ctx = chartContainer?.current;
    const chartType = 'doughnut';
    const labels = allCategories.map(({ name }) => name);
    const data = allCategories.map(({ total }) => total);

    const backgroundColor = labels
      .map((category) => dataList
        .find(({ value }) => category === value)?.color ?? defaultColor);

    const config = {
      ctx, labels, data, backgroundColor, chartType,
    };

    return config;
  }, [expenditure]);

  useEffect(() => {
    const config = initChartData();
    const chart = buildChart(config);
    return () => chart.destroy();
  }, []);

  return (
    <>
      <div className="wrap-page">
        <section className="outcome">
          <h3>Total Outcome</h3>
          <div>
            {isLoading
              ? <p className="page-loading"><FaSpinner /></p>
              : <canvas ref={chartContainer} />}
          </div>
        </section>
      </div>
    </>
  );
};

export default Reports;
