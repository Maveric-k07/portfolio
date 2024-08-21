import React from 'react';

const Arrow = () => {
  return (
    <div style={{
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row-reverse',
      width: '34%',
      left: '50%',
      bottom: '-88px',
      transform: 'translateX(-50%)',
      textAlign: 'center',
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800">
            <g strokeWidth="42" stroke="hsl(0, 0%, 0%)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="18.5 0" transform="matrix(-0.24192189559966779,-0.9702957262759965,0.9702957262759965,-0.24192189559966779,-123.34953227053148,884.8870487502656)">
            <path d="M156.49532115459442 156Q133.49532115459442 439 644.4953211545944 644" markerEnd="url(#SvgjsMarker2914)"></path>
            </g>
            <defs>
            <marker markerWidth="10" markerHeight="10" refX="5" refY="5" viewBox="0 0 10 10" orient="auto" id="SvgjsMarker2914">
                <polyline points="0,5 5,2.5 0,0" fill="none" strokeWidth="1.6666666666666667" stroke="hsl(0, 0%, 0%)" strokeLinecap="round" transform="matrix(1,0,0,1,1.6666666666666667,2.5)" strokeLinejoin="round"></polyline>
            </marker>
            </defs>
        </svg>
      
      <div style={{
        width: '100%',
        fontSize: '20px',
        color: 'black',
        fontFamily: 'Arial, sans-serif',
        fontStyle: 'italic',
        marginTop: '32px',
        display: 'flex',
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}>
        <a target='_blank' className='border px-4 py-2 rounded bg-black text-decoration-none text-white' href='https://vercel.com/blog/building-an-interactive-3d-event-badge-with-react-three-fiber'>
            Pull!
        </a> 
      </div>

    </div>
  );
};

export default Arrow;